/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.6 crooked-daija
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
 * List of active invites. Onece an invite has been redeemed it will be
 * removed automatically. An administrator of the team can delete unused
 * invites.
 * @export
 * @interface InviteList
 */
export interface InviteList {
    /**
     * 
     * @type {Array<Invite>}
     * @memberof InviteList
     */
    invites?: Array<Invite>;
}

export function InviteListFromJSON(json: any): InviteList {
    return InviteListFromJSONTyped(json, false);
}

export function InviteListFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invites': !exists(json, 'invites') ? undefined : ((json['invites'] as Array<any>).map(InviteFromJSON)),
    };
}

export function InviteListToJSON(value?: InviteList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invites': value.invites === undefined ? undefined : ((value.invites as Array<any>).map(InviteToJSON)),
    };
}


