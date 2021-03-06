/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.13 bordering-jerilyn
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Invite. Invites are used to share access to teams. You must be an
 * administrator to generate invites for a team.
 * @export
 * @interface Invite
 */
export interface Invite {
    /**
     * 
     * @type {string}
     * @memberof Invite
     */
    code?: string;
    /**
     * Time stamp when the invite was generated.
     * @type {string}
     * @memberof Invite
     */
    createdAt?: string;
}

export function InviteFromJSON(json: any): Invite {
    return InviteFromJSONTyped(json, false);
}

export function InviteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function InviteToJSON(value?: Invite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'createdAt': value.createdAt,
    };
}


