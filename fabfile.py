"""Fabric deployment file for obeattie.com"""
from fabric.api import env, run

# The server uses ssh keys, so no passwords here.
env.hosts = ['fabric@obeattie.com:30000', ]

def deploy():
    """Deploys the newest version of the site (this just consists of running `git pull`)"""
    run('cd /home/public_html/obeattie; git pull;')
