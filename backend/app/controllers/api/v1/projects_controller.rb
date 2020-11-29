class Api::V1::Workspaces::ProjectsController < Api::ApiController
  def index
    # workspaceのownerのみ閲覧可能
    # workspaceのproject一覧
  end

  def show
    # メンバーのみ閲覧可能
  end

  def create
    # workspaceのメンバーであれば作成可能
  end
end
