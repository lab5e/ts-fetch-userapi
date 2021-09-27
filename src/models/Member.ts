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
import {
    UserProfile,
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './';

/**
 * 
 * @export
 * @interface Member
 */
export interface Member {
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    userId?: string;
    /**
     * 
     * @type {UserProfile}
     * @memberof Member
     */
    user?: UserProfile;
}

export function MemberFromJSON(json: any): Member {
    return MemberFromJSONTyped(json, false);
}

export function MemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Member {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'user': !exists(json, 'user') ? undefined : UserProfileFromJSON(json['user']),
    };
}

export function MemberToJSON(value?: Member | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamId': value.teamId,
        'role': value.role,
        'userId': value.userId,
        'user': UserProfileToJSON(value.user),
    };
}


