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

  def my
    # current_userのプロジェクト
  end

  def members
    # projectのメンバーを取得
  end

  def new_member
    # project外のworkspaceのメンバーを取得
  end

  def add_member
    # 新規でメンバーを追加
  end
end
