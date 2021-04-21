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
    ProtobufAny,
    ProtobufAnyFromJSON,
    ProtobufAnyFromJSONTyped,
    ProtobufAnyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RpcStatus
 */
export interface RpcStatus {
    /**
     * 
     * @type {number}
     * @memberof RpcStatus
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof RpcStatus
     */
    message?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof RpcStatus
     */
    details?: Array<ProtobufAny>;
}

export function RpcStatusFromJSON(json: any): RpcStatus {
    return RpcStatusFromJSONTyped(json, false);
}

export function RpcStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RpcStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ProtobufAnyFromJSON)),
    };
}

export function RpcStatusToJSON(value?: RpcStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ProtobufAnyToJSON)),
    };
}


