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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InviteRequest
 */
export interface InviteRequest {
    /**
     * 
     * @type {string}
     * @memberof InviteRequest
     */
    teamId?: string;
    /**
     * The invite code.
     * @type {string}
     * @memberof InviteRequest
     */
    code?: string;
}

export function InviteRequestFromJSON(json: any): InviteRequest {
    return InviteRequestFromJSONTyped(json, false);
}

export function InviteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function InviteRequestToJSON(value?: InviteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamId': value.teamId,
        'code': value.code,
    };
}


