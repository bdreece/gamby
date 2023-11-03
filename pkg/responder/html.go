package responder

import (
	"net/http"

	"github.com/bdreece/gamby/internal/service/renderer"
)

type TemplateOptions struct {
	Name   string
	Data   any
	Layout bool
}

type HTML interface {
	Responder[TemplateOptions]
}

type html struct {
	renderer renderer.Renderer
}

func NewHTML(r renderer.Renderer) HTML {
	return &html{r}
}

func (r *html) Respond(w http.ResponseWriter, opts TemplateOptions) error {
	w.Header().Add("Content-Type", "text/html; charset=utf-8")
	return r.renderer.Render(w, opts.Name, opts.Data, opts.Layout)
}
