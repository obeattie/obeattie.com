.PHONY: upload
upload:
	rm -rf ./dist
	npm run build
	aws s3 sync ./dist s3://www.obeattie.com/
	aws cloudfront create-invalidation --distribution-id E2PQEQ2H0719SJ --paths "/*"
