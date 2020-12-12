class Api::V1::Projects::MembersController < Api::ApiController
  def show
    user = User.find(params[:id])

    tasks = Task.includes(:project, :user).where(
      :user_id => params[:id],
      :project_id => params[:project_id]
    )

    user_profile = UserProfile.find_by(
      :user_id => params[:id],
      :workspace_id => @workspace.id
    )

    render :template => 'api/v1/projects/members/show.json.jb', :locals => {
      # :project_member => project_member,
      :user => user,
      :tasks => tasks,
      :profile => user_profile
    }
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
