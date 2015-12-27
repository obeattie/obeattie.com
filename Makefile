upload:
	s3cmd --no-preserve --exclude-from .s3ignore sync . s3://www.obeattie.com/
