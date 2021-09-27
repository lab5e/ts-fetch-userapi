/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.11 lucky-fremont
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AcceptInviteRequest
 */
export interface AcceptInviteRequest {
    /**
     * The invite code to use.
     * @type {string}
     * @memberof AcceptInviteRequest
     */
    code?: string;
}

export function AcceptInviteRequestFromJSON(json: any): AcceptInviteRequest {
    return AcceptInviteRequestFromJSONTyped(json, false);
}

export function AcceptInviteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptInviteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function AcceptInviteRequestToJSON(value?: AcceptInviteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}


