/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.5 everlasting-ashanti
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Team,
    TeamFromJSON,
    TeamFromJSONTyped,
    TeamToJSON,
} from './';

/**
 * 
 * @export
 * @interface TeamList
 */
export interface TeamList {
    /**
     * 
     * @type {Array<Team>}
     * @memberof TeamList
     */
    teams?: Array<Team>;
}

export function TeamListFromJSON(json: any): TeamList {
    return TeamListFromJSONTyped(json, false);
}

export function TeamListFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teams': !exists(json, 'teams') ? undefined : ((json['teams'] as Array<any>).map(TeamFromJSON)),
    };
}

export function TeamListToJSON(value?: TeamList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teams': value.teams === undefined ? undefined : ((value.teams as Array<any>).map(TeamToJSON)),
    };
}


