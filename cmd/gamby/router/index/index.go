package index

import (
	"net/http"

	"github.com/bdreece/gamby/pkg/responder"
)

func Get(html responder.HTML) http.HandlerFunc {
	return func(w http.ResponseWriter, _ *http.Request) {
		if err := html.Respond(w, responder.TemplateOptions{
			Name:   "index",
			Data:   struct{}{},
			Layout: true,
		}); err != nil {
			panic(err)
		}
	}
}
