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
    Token,
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './';

/**
 * 
 * @export
 * @interface TokenList
 */
export interface TokenList {
    /**
     * 
     * @type {Array<Token>}
     * @memberof TokenList
     */
    tokens?: Array<Token>;
}

export function TokenListFromJSON(json: any): TokenList {
    return TokenListFromJSONTyped(json, false);
}

export function TokenListFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokens': !exists(json, 'tokens') ? undefined : ((json['tokens'] as Array<any>).map(TokenFromJSON)),
    };
}

export function TokenListToJSON(value?: TokenList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokens': value.tokens === undefined ? undefined : ((value.tokens as Array<any>).map(TokenToJSON)),
    };
}


