"""Fabric deployment file for obeattie.com"""

def deploy():
    """Deploys the newest version of the site (this just consists of running `git pull`
       on the server, really)."""
    # The server uses ssh keys, so no passwords here.
    config.fab_hosts = ['obeattie.com', ]
    config.fab_user = 'fabric'
    config.fab_port = 30000
    
    run('cd /home/public_html/obeattie; git pull;')
