require 'sinatra'

set :views, Proc.new {File.join(root, '..', 'views')}
set :public_folder, 'public'

get '/' do
	erb :index
end