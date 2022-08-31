package store

import "time"

// type Post struct {
// 	ID       int
// 	Username string
// 	// ImageUrl    string
// 	// Latitude    string
// 	// Longitude   string
// 	// Description string
// 	// CreatedAt   time.Time
// 	// ModifiedAt  time.Time
// }

type Post struct {
	ID         int
	Username   string `binding:"required,min=5,max=30"`
	Password   string `binding:"required,min=7,max=32"`
	CreatedAt  time.Time
	ModifiedAt time.Time
}

func AddPost(post *Post) error {
	_, err := db.Model(post).Returning("*").Insert()
	if err != nil {
		return err
	}
	return nil
}
