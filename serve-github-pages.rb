#!/usr/bin/env ruby

# Preview the rendered GitHub Pages in a browser.
# Inspired by http://asciidoctor.org/docs/user-manual/#external-preview

# Utilities to replace common UNIX commands in Makefiles etc
# https://github.com/ruby/ruby/blob/trunk/lib/un.rb
require 'un'

# Pass these values as command line arguments to httpd.
ARGV.replace [File.expand_path('.', __dir__), '--port=8080']

# Start the http server.
httpd
