package store

type Post struct {
	ImageUrl    string
	Latitude    string
	Longtitude  string
	Description string
}

func AddPost(post *Post) error {
	_, err := db.Model(post).Returning("*").Insert()
	if err != nil {
		return err
	}
	return nil
}
