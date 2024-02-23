SHELL := /bin/bash
.PHONY: publish
publish:
	git add .
	read -p "Enter commit message: " message; \
	git commit -m "$$message"
	git fetch
	git pull
	git push