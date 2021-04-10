/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.4 breezy-leafy
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RpcStatus,
    RpcStatusFromJSON,
    RpcStatusToJSON,
    UserProfile,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models';

/**
 * 
 */
export class ProfileApi extends runtime.BaseAPI {

    /**
     * Show your user profile information
     * Logged in profile
     */
    async userGetUserProfileRaw(): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Show your user profile information
     * Logged in profile
     */
    async userGetUserProfile(): Promise<UserProfile> {
        const response = await this.userGetUserProfileRaw();
        return await response.value();
    }

}