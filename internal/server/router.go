package server

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	// Creates default gin router with Logger and Recovery middleware already attached
	router := gin.Default()

	// Allow cors
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	router.Use(cors.New(config))

	// Create API route group
	api := router.Group("/api")
	{
		api.POST("/post", post)
		api.GET("/list", getlatestPosts)
		api.GET("/single", getSinglePhoto)
		api.PATCH("")
		// TODO: Get the endpoints cleaner
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
