.PHONY: upload
upload:
	grunt build cacheBust
	s3cmd --no-preserve --exclude-from .s3ignore sync . s3://www.obeattie.com/
	git clean -f static
	git co HEAD index.html
