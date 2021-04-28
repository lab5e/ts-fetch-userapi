/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.9 cumulative-hardin
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AcceptInviteRequest,
    AcceptInviteRequestFromJSON,
    AcceptInviteRequestToJSON,
    DeleteInviteResponse,
    DeleteInviteResponseFromJSON,
    DeleteInviteResponseToJSON,
    Invite,
    InviteFromJSON,
    InviteToJSON,
    InviteList,
    InviteListFromJSON,
    InviteListToJSON,
    InviteRequest,
    InviteRequestFromJSON,
    InviteRequestToJSON,
    Member,
    MemberFromJSON,
    MemberToJSON,
    MemberList,
    MemberListFromJSON,
    MemberListToJSON,
    RpcStatus,
    RpcStatusFromJSON,
    RpcStatusToJSON,
    Team,
    TeamFromJSON,
    TeamToJSON,
    TeamList,
    TeamListFromJSON,
    TeamListToJSON,
} from '../models';

export interface AcceptInviteOperationRequest {
    body: AcceptInviteRequest;
}

export interface CreateTeamRequest {
    body: Team;
}

export interface DeleteInviteRequest {
    teamId: string;
    code: string;
}

export interface DeleteMemberRequest {
    teamId: string;
    userId: string;
}

export interface DeleteTeamRequest {
    teamId: string;
}

export interface GenerateInviteRequest {
    teamId: string;
    body: InviteRequest;
}

export interface ListInvitesRequest {
    teamId: string;
}

export interface RetrieveInviteRequest {
    teamId: string;
    code: string;
}

export interface RetrieveMemberRequest {
    teamId: string;
    userId: string;
}

export interface RetrieveTeamRequest {
    teamId: string;
}

export interface RetrieveTeamMembersRequest {
    teamId: string;
}

export interface UpdateMemberRequest {
    teamId: string;
    userId: string;
    body: Member;
}

export interface UpdateTeamRequest {
    teamId: string;
    body: Team;
}

/**
 * 
 */
export class TeamsApi extends runtime.BaseAPI {

    /**
     * Accept an invite from another user. This will add the currently logged in user to the team as a regular memeber. When the invite is accepted it is removed from the team\'s invites and cannot be reused.
     * Accept invite
     */
    async acceptInviteRaw(requestParameters: AcceptInviteOperationRequest): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling acceptInvite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/accept`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AcceptInviteRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     * Accept an invite from another user. This will add the currently logged in user to the team as a regular memeber. When the invite is accepted it is removed from the team\'s invites and cannot be reused.
     * Accept invite
     */
    async acceptInvite(requestParameters: AcceptInviteOperationRequest): Promise<Team> {
        const response = await this.acceptInviteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create team
     */
    async createTeamRaw(requestParameters: CreateTeamRequest): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TeamToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     * Create team
     */
    async createTeam(requestParameters: CreateTeamRequest): Promise<Team> {
        const response = await this.createTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an invite created earlier. You must be an administrator of the team to perform this action
     * Delete invite
     */
    async deleteInviteRaw(requestParameters: DeleteInviteRequest): Promise<runtime.ApiResponse<DeleteInviteResponse>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteInvite.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteInvite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/invites/{code}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteInviteResponseFromJSON(jsonValue));
    }

    /**
     * Delete an invite created earlier. You must be an administrator of the team to perform this action
     * Delete invite
     */
    async deleteInvite(requestParameters: DeleteInviteRequest): Promise<DeleteInviteResponse> {
        const response = await this.deleteInviteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Remove a member from the team. You must be an administrator to do this. You can\'t remove yourself from the team.
     * Remove member
     */
    async deleteMemberRaw(requestParameters: DeleteMemberRequest): Promise<runtime.ApiResponse<Member>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteMember.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/members/{userId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberFromJSON(jsonValue));
    }

    /**
     * Remove a member from the team. You must be an administrator to do this. You can\'t remove yourself from the team.
     * Remove member
     */
    async deleteMember(requestParameters: DeleteMemberRequest): Promise<Member> {
        const response = await this.deleteMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Remove team
     */
    async deleteTeamRaw(requestParameters: DeleteTeamRequest): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Remove team
     */
    async deleteTeam(requestParameters: DeleteTeamRequest): Promise<Team> {
        const response = await this.deleteTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Generate invite
     */
    async generateInviteRaw(requestParameters: GenerateInviteRequest): Promise<runtime.ApiResponse<Invite>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling generateInvite.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling generateInvite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/invites`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteRequestToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InviteFromJSON(jsonValue));
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Generate invite
     */
    async generateInvite(requestParameters: GenerateInviteRequest): Promise<Invite> {
        const response = await this.generateInviteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * List invites
     */
    async listInvitesRaw(requestParameters: ListInvitesRequest): Promise<runtime.ApiResponse<InviteList>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling listInvites.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/invites`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InviteListFromJSON(jsonValue));
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * List invites
     */
    async listInvites(requestParameters: ListInvitesRequest): Promise<InviteList> {
        const response = await this.listInvitesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * List teams
     */
    async listTeamsRaw(): Promise<runtime.ApiResponse<TeamList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamListFromJSON(jsonValue));
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * List teams
     */
    async listTeams(): Promise<TeamList> {
        const response = await this.listTeamsRaw();
        return await response.value();
    }

    /**
     * Read a single invite from the team\'s set of non-redeemed invites.
     * Retrieve invite
     */
    async retrieveInviteRaw(requestParameters: RetrieveInviteRequest): Promise<runtime.ApiResponse<Invite>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling retrieveInvite.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling retrieveInvite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/invites/{code}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InviteFromJSON(jsonValue));
    }

    /**
     * Read a single invite from the team\'s set of non-redeemed invites.
     * Retrieve invite
     */
    async retrieveInvite(requestParameters: RetrieveInviteRequest): Promise<Invite> {
        const response = await this.retrieveInviteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve member
     */
    async retrieveMemberRaw(requestParameters: RetrieveMemberRequest): Promise<runtime.ApiResponse<Member>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling retrieveMember.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling retrieveMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/members/{userId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberFromJSON(jsonValue));
    }

    /**
     * Retrieve member
     */
    async retrieveMember(requestParameters: RetrieveMemberRequest): Promise<Member> {
        const response = await this.retrieveMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve team
     */
    async retrieveTeamRaw(requestParameters: RetrieveTeamRequest): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling retrieveTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     * Retrieve team
     */
    async retrieveTeam(requestParameters: RetrieveTeamRequest): Promise<Team> {
        const response = await this.retrieveTeamRaw(requestParameters);
        return await response.value();
    }

    /**
     * List members
     */
    async retrieveTeamMembersRaw(requestParameters: RetrieveTeamMembersRequest): Promise<runtime.ApiResponse<MemberList>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling retrieveTeamMembers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/members`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberListFromJSON(jsonValue));
    }

    /**
     * List members
     */
    async retrieveTeamMembers(requestParameters: RetrieveTeamMembersRequest): Promise<MemberList> {
        const response = await this.retrieveTeamMembersRaw(requestParameters);
        return await response.value();
    }

    /**
     * You must be an administrator of the team to update member settings
     * Update member
     */
    async updateMemberRaw(requestParameters: UpdateMemberRequest): Promise<runtime.ApiResponse<Member>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling updateMember.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateMember.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}/members/{userId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: MemberToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberFromJSON(jsonValue));
    }

    /**
     * You must be an administrator of the team to update member settings
     * Update member
     */
    async updateMember(requestParameters: UpdateMemberRequest): Promise<Member> {
        const response = await this.updateMemberRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Update team
     */
    async updateTeamRaw(requestParameters: UpdateTeamRequest): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling updateTeam.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/teams/{teamId}`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TeamToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     * Update the team. You must be an administrator of the team to edit it.
     * Update team
     */
    async updateTeam(requestParameters: UpdateTeamRequest): Promise<Team> {
        const response = await this.updateTeamRaw(requestParameters);
        return await response.value();
    }

}
