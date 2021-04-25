/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.8 indivisible-esau
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DeleteTokenResponse,
    DeleteTokenResponseFromJSON,
    DeleteTokenResponseToJSON,
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

export interface CreateTokenRequest {
    body: Token;
}

export interface DeleteTokenRequest {
    token: string;
}

export interface RetrieveTokenRequest {
    token: string;
}

export interface UpdateTokenRequest {
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
    async createTokenRaw(requestParameters: CreateTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createToken.');
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
    async createToken(requestParameters: CreateTokenRequest): Promise<Token> {
        const response = await this.createTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Remove token
     */
    async deleteTokenRaw(requestParameters: DeleteTokenRequest): Promise<runtime.ApiResponse<DeleteTokenResponse>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling deleteToken.');
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteTokenResponseFromJSON(jsonValue));
    }

    /**
     * Remove token
     */
    async deleteToken(requestParameters: DeleteTokenRequest): Promise<DeleteTokenResponse> {
        const response = await this.deleteTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * List tokens
     */
    async listTokensRaw(): Promise<runtime.ApiResponse<TokenList>> {
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
    async listTokens(): Promise<TokenList> {
        const response = await this.listTokensRaw();
        return await response.value();
    }

    /**
     * Retrieve token
     */
    async retrieveTokenRaw(requestParameters: RetrieveTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling retrieveToken.');
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
    async retrieveToken(requestParameters: RetrieveTokenRequest): Promise<Token> {
        const response = await this.retrieveTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update token
     */
    async updateTokenRaw(requestParameters: UpdateTokenRequest): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling updateToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateToken.');
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
    async updateToken(requestParameters: UpdateTokenRequest): Promise<Token> {
        const response = await this.updateTokenRaw(requestParameters);
        return await response.value();
    }

}
