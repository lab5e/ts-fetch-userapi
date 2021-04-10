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
    Token,
    TokenFromJSON,
    TokenToJSON,
    TokenList,
    TokenListFromJSON,
    TokenListToJSON,
} from '../models';

export interface UserCreateTokenRequest {
    body: Token;
}

export interface UserDeleteTokenRequest {
    token: string;
}

export interface UserRetrieveTokenRequest {
    token: string;
}

export interface UserUpdateTokenRequest {
    token: string;
    body: Token;
}

/**
 * 
 */
export class TokensApi extends runtime.BaseAPI {

    /**
     * Create token
     */
    async userCreateTokenRaw(requestParameters: UserCreateTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling userCreateToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Create token
     */
    async userCreateToken(requestParameters: UserCreateTokenRequest): Promise<Token> {
        const response = await this.userCreateTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Remove token
     */
    async userDeleteTokenRaw(requestParameters: UserDeleteTokenRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling userDeleteToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/tokens/{token}`.replace(`{${"token"}}`, encodeURIComponent(String(requestParameters.token))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Remove token
     */
    async userDeleteToken(requestParameters: UserDeleteTokenRequest): Promise<object> {
        const response = await this.userDeleteTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * List tokens
     */
    async userListTokensRaw(): Promise<runtime.ApiResponse<TokenList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/tokens`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenListFromJSON(jsonValue));
    }

    /**
     * List tokens
     */
    async userListTokens(): Promise<TokenList> {
        const response = await this.userListTokensRaw();
        return await response.value();
    }

    /**
     * Retrieve token
     */
    async userRetrieveTokenRaw(requestParameters: UserRetrieveTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling userRetrieveToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/tokens/{token}`.replace(`{${"token"}}`, encodeURIComponent(String(requestParameters.token))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Retrieve token
     */
    async userRetrieveToken(requestParameters: UserRetrieveTokenRequest): Promise<Token> {
        const response = await this.userRetrieveTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update token
     */
    async userUpdateTokenRaw(requestParameters: UserUpdateTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling userUpdateToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling userUpdateToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Token"] = this.configuration.apiKey("X-API-Token"); // APIToken authentication
        }

        const response = await this.request({
            path: `/user/tokens/{token}`.replace(`{${"token"}}`, encodeURIComponent(String(requestParameters.token))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TokenToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Update token
     */
    async userUpdateToken(requestParameters: UserUpdateTokenRequest): Promise<Token> {
        const response = await this.userUpdateTokenRaw(requestParameters);
        return await response.value();
    }

}