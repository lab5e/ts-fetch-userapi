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
import {
    Member,
    MemberFromJSON,
    MemberFromJSONTyped,
    MemberToJSON,
} from './';

/**
 * 
 * @export
 * @interface MemberList
 */
export interface MemberList {
    /**
     * 
     * @type {Array<Member>}
     * @memberof MemberList
     */
    members?: Array<Member>;
}

export function MemberListFromJSON(json: any): MemberList {
    return MemberListFromJSONTyped(json, false);
}

export function MemberListFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'members': !exists(json, 'members') ? undefined : ((json['members'] as Array<any>).map(MemberFromJSON)),
    };
}

export function MemberListToJSON(value?: MemberList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'members': value.members === undefined ? undefined : ((value.members as Array<any>).map(MemberToJSON)),
    };
}


