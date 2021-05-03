/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.10 constant-champ
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Invite,
    InviteFromJSON,
    InviteFromJSONTyped,
    InviteToJSON,
} from './';

/**
 * 
 * @export
 * @interface DeleteInviteResponse
 */
export interface DeleteInviteResponse {
    /**
     * 
     * @type {Invite}
     * @memberof DeleteInviteResponse
     */
    invite?: Invite;
}

export function DeleteInviteResponseFromJSON(json: any): DeleteInviteResponse {
    return DeleteInviteResponseFromJSONTyped(json, false);
}

export function DeleteInviteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteInviteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invite': !exists(json, 'invite') ? undefined : InviteFromJSON(json['invite']),
    };
}

export function DeleteInviteResponseToJSON(value?: DeleteInviteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invite': InviteToJSON(value.invite),
    };
}


