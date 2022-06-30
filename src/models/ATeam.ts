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
 * @interface ATeam
 */
export interface ATeam {
    /**
     * 
     * @type {boolean}
     * @memberof ATeam
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ATeam
     */
    tags?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Member>}
     * @memberof ATeam
     */
    members?: Array<Member>;
}

export function ATeamFromJSON(json: any): ATeam {
    return ATeamFromJSONTyped(json, false);
}

export function ATeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): ATeam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isPrivate': !exists(json, 'isPrivate') ? undefined : json['isPrivate'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'members': !exists(json, 'members') ? undefined : ((json['members'] as Array<any>).map(MemberFromJSON)),
    };
}

export function ATeamToJSON(value?: ATeam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isPrivate': value.isPrivate,
        'tags': value.tags,
        'members': value.members === undefined ? undefined : ((value.members as Array<any>).map(MemberToJSON)),
    };
}

