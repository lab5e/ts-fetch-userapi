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
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    teamId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Team
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Team
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Member>}
     * @memberof Team
     */
    members?: Array<Member>;
}

export function TeamFromJSON(json: any): Team {
    return TeamFromJSONTyped(json, false);
}

export function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'teamId') ? undefined : json['teamId'],
        'isPrivate': !exists(json, 'isPrivate') ? undefined : json['isPrivate'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'members': !exists(json, 'members') ? undefined : ((json['members'] as Array<any>).map(MemberFromJSON)),
    };
}

export function TeamToJSON(value?: Team | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamId': value.teamId,
        'isPrivate': value.isPrivate,
        'tags': value.tags,
        'members': value.members === undefined ? undefined : ((value.members as Array<any>).map(MemberToJSON)),
    };
}


