package router

import (
	"net/http"

	"github.com/bdreece/gamby/pkg/responder"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func New(html responder.HTML) http.Handler {
	r := chi.NewRouter()

	r.Use(middleware.DefaultLogger)
	r.Use(middleware.Recoverer)

	r.Get("/", index(html))

	return r
}
