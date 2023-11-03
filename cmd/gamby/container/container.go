package container

import (
	"html/template"
	"log/slog"
	"os"

	"github.com/Masterminds/sprig/v3"
	"github.com/bdreece/gamby/cmd/gamby/config"
	"go.uber.org/dig"
)

func New(configPath string) *dig.Container {
	c := dig.New()

	c.Provide(func() (*config.Config, error) {
		return config.FromFile(configPath)
	})

	c.Provide(provideLogger)

	return c
}

func provideLogger(c *config.Config) *slog.Logger {
	h := slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.Level(c.LogLevel),
	})

	return slog.New(h)
}

func provideTemplates() (*template.Template, error) {
	return template.New("templates").
		Funcs(sprig.FuncMap()).
		ParseFS(os.DirFS("web/templates"), "**/*.gotmpl")
}
