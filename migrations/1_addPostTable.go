package main

import (
	"fmt"

	"github.com/go-pg/migrations/v8"
)

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("creating table post...")
		_, err := db.Exec(`CREATE TABLE post(
      id SERIAL PRIMARY KEY,
			userId TEXT NOT NULL,
      imageUrl TEXT NOT NULL,
      latitude TEXT NOT NULL,
			longitude TEXT NOT NULL,
			description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`)
		return err
	}, func(db migrations.DB) error {
		fmt.Println("dropping table post...")
		_, err := db.Exec(`DROP TABLE post`)
		return err
	})
}
