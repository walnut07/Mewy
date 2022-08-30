package server

import (
	"Mewy/internal/store"
	"net/http"

	"github.com/gin-gonic/gin"
)

func post(ctx *gin.Context) {
	post := new(store.Post)
	if err := ctx.Bind(post); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"base64":      post.Base64,
		"latitude":    post.Latitude,
		"longtitude":  post.Longtitude,
		"description": post.Description,
	})
}
