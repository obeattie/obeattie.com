"""Fabric deployment file for obeattie.com"""
from fabric.api import cd, env, sudo

# The server uses ssh keys, so no passwords here.
env.hosts = ['obeattie@obeattie.com', ]

def deploy():
    """Deploys the newest version of the site (this just consists of running `git pull`)"""
    with cd('/var/www/obeattie'):
        sudo('git reset --hard')
        sudo('git pull')
