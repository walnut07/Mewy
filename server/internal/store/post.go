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

func AddPost(post *Post) (int, error) {
	// TODO(kurumi): Implement transaction
	_, err := db.Model(post).Returning("*").Insert()
	if err != nil {
		return -1, err
	}
	return post.ID, nil
}

func GetLatestPosts(limit int) ([]*Post, error) {
	// TODO(kurumi): Implement transaction
	var latestPosts []*Post
	err := db.Model(&latestPosts).Order("modified_at DESC").Limit(limit).Select()
	if err != nil {
		return nil, err
	}
	return latestPosts, nil
}

func GetSinglePost(id int) (*Post, error) {
	// TODO(kurumi): Implement transaction
	var post []*Post

	err := db.Model(&post).Where("id = ?", id).Select()
	if err != nil {
		return nil, err
	}

	if len(post) == 0 {
		return nil, fmt.Errorf("invalid post ID")
	}

	return post[0], nil

}
