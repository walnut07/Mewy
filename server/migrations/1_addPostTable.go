package main

import (
	"fmt"

	"github.com/go-pg/migrations/v8"
)

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("creating table posts...")
		_, err := db.Exec(`CREATE TABLE posts(
			id SERIAL PRIMARY KEY,
			user_id TEXT NOT NULL,
			image_url TEXT NOT NULL,
			latitude NUMERIC NOT NULL,
			longitude NUMERIC NOT NULL,
			description TEXT,
			created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
			modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`)
		return err
	}, func(db migrations.DB) error {
		fmt.Println("dropping table posts...")
		_, err := db.Exec(`DROP TABLE posts`)
		return err
	})
}
