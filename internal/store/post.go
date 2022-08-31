package store

import (
	"fmt"
	"time"
)

type Post struct {
	ID          int
	UserId      string
	ImageUrl    string
	Latitude    float32
	Longitude   float32
	Description string
	CreatedAt   time.Time
	ModifiedAt  time.Time
}

func AddPost(post *Post) error {
	_, err := db.Model(post).Returning("*").Insert()
	if err != nil {
		return err
	}
	return nil
}

func GetLatestPosts(limit int) ([]*Post, error) {
	var latestPosts []*Post
	fmt.Println(limit)
	err := db.Model(&latestPosts).Order("modified_at DESC").Limit(limit).Select()
	if err != nil {
		return nil, err
	}
	return latestPosts, nil
}
