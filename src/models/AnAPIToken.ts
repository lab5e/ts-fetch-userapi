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
 * 
 * @export
 * @interface AnAPIToken
 */
export interface AnAPIToken {
    /**
     * The resource of the token.
     * 
     * The token applies to the specified resource
     * and any resources below this so the resource `/` applies to the root
     * resource and any resource below the root resource. In the same manner
     * `/collections` will apply to all collectins while `/collections/{id}`
     * will apply to that particular collection.
     * @type {string}
     * @memberof AnAPIToken
     */
    resource?: string;
    /**
     * Write flag for token.
     * 
     * If this is set to `true` the token can be used for
     * write operations in the API such as POST, DELETE and PATCH.
     * @type {boolean}
     * @memberof AnAPIToken
     */
    write?: boolean;
    /**
     * Tags for the token.
     * @type {{ [key: string]: string; }}
     * @memberof AnAPIToken
     */
    tags?: { [key: string]: string; };
    /**
     * The last time the token was used. Time in ms since epoch.
     * @type {string}
     * @memberof AnAPIToken
     */
    lastUse?: string;
    /**
     * 
     * @type {string}
     * @memberof AnAPIToken
     */
    uses?: string;
}

export function AnAPITokenFromJSON(json: any): AnAPIToken {
    return AnAPITokenFromJSONTyped(json, false);
}

export function AnAPITokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnAPIToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
        'write': !exists(json, 'write') ? undefined : json['write'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'lastUse': !exists(json, 'lastUse') ? undefined : json['lastUse'],
        'uses': !exists(json, 'uses') ? undefined : json['uses'],
    };
}

export function AnAPITokenToJSON(value?: AnAPIToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource': value.resource,
        'write': value.write,
        'tags': value.tags,
        'lastUse': value.lastUse,
        'uses': value.uses,
    };
}


