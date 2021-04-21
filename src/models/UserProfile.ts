/* tslint:disable */
/* eslint-disable */
/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.7 frequent-amara
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Your user profile.
 * You can change the contents of the user profile via the log in service you
 * are using.
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    profileUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    githubLogin?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    logoutUrl?: string;
}

export function UserProfileFromJSON(json: any): UserProfile {
    return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'avatarUrl': !exists(json, 'avatarUrl') ? undefined : json['avatarUrl'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'profileUrl': !exists(json, 'profileUrl') ? undefined : json['profileUrl'],
        'githubLogin': !exists(json, 'githubLogin') ? undefined : json['githubLogin'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'logoutUrl': !exists(json, 'logoutUrl') ? undefined : json['logoutUrl'],
    };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'email': value.email,
        'avatarUrl': value.avatarUrl,
        'name': value.name,
        'profileUrl': value.profileUrl,
        'githubLogin': value.githubLogin,
        'provider': value.provider,
        'logoutUrl': value.logoutUrl,
    };
}


