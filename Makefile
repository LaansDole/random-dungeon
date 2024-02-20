SHELL := /bin/bash
.PHONY: publish
publish:
	git add .
	git commit -m "ci: update game version"
	git fetch
	git pull
	git push