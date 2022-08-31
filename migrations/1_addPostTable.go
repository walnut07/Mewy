// package main

// import (
// 	"fmt"

// 	"github.com/go-pg/migrations/v8"
// )

// func init() {
// 	migrations.MustRegisterTx(func(db migrations.DB) error {
// 		fmt.Println("creating table posts...")
// 		_, err := db.Exec(`CREATE TABLE posts(
//       id SERIAL PRIMARY KEY,
// 			userId TEXT NOT NULL
//     )`)
// 		return err
// 	}, func(db migrations.DB) error {
// 		fmt.Println("dropping table posts...")
// 		_, err := db.Exec(`DROP TABLE posts`)
// 		return err
// 	})
// }

// imageUrl TEXT NOT NULL,
// latitude TEXT NOT NULL,
// longitude TEXT NOT NULL,
// description TEXT,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
// modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

package main

import (
	"fmt"

	"github.com/go-pg/migrations/v8"
)

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("creating table users...")
		_, err := db.Exec(`CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`)
		return err
	}, func(db migrations.DB) error {
		fmt.Println("dropping table users...")
		_, err := db.Exec(`DROP TABLE users`)
		return err
	})
}
