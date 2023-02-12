package server

import (
	"Mewy/internal/store"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func post(ctx *gin.Context) {
	post := new(store.Post)
	if err := ctx.Bind(post); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	id, err := store.AddPost(post)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"postId": id,
	})
}

func getlatestPosts(ctx *gin.Context) {
	param := ctx.Query("limit")
	limit, err := strconv.Atoi(param)

	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	if err := ctx.Bind(limit); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	posts, err := store.GetLatestPosts(limit)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"result": posts})
}

func getSinglePhoto(ctx *gin.Context) {
	param := ctx.Query("id")
	id, err := strconv.Atoi(param)

	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	post, err := store.GetSinglePost(id)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"result": post})
}
