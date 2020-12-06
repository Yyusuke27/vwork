class Api::V1::Projects::MembersController < Api::ApiController
  def index
    # projectのメンバーを取得
  end

  def create
    # 新規でメンバーを追加
    if members_params.present?
      members = members_params[:members]
      members.each do |member|
        project_member = ProjectMember.new(
          :role => 0,
          :member_id => member,
          :project_id => params[:projectId]
        )
        project_member.save!
      end
    end

    render :template => 'api/v1/projects/members/create.json.jb'
  end

  private

  def members_params
    params.permit(:members => [])
  end
end
