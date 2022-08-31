package store

import (
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
