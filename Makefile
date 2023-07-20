install: install-deps
	npx simple-git-hooks

install-deps: 
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js
	
test:
	npm test

lint: 
	npx eslint .
	
fix-all: 
	npx eslint --fix .

test-coverage:
	npm test -- --coverage --coverageProvider=v8