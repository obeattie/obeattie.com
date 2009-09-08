"""Fabric deployment file for obeattie.com"""

# The server uses ssh keys, so no passwords here.
config.fab_hosts = ['obeattie.com', ]
config.fab_user = 'fabric'
config.fab_port = 30000

def deploy():
    """Deploys the newest version of the site (this just consists of running `git pull`)"""
    run('cd /home/public_html/obeattie; git pull;')
