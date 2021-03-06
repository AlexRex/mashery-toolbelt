// These fields are aggregated from https://developer.mashery.com/docs/read/mashery_api/30/resources
// But some entities (like organization) or some fields was added based on real application calls
// If you find that any field is missing there feel free to add it and comment it when it makes sense
module.exports = {
  organization: [
    'id',
    'name',
    'parent',
    'suborganizations',
    'description',
    'created',
    'updated'
  ],
  service: [
    'id',
    'name',
    'description',
    'created',
    'updated',
    'endpoints',
    'editorHandle',
    'revisionNumber',
    'robotsPolicy',
    'crossdomainPolicy',
    'errorSets',
    'qpsLimitOverall',
    'rfc3986Encode',
    'securityProfile',
    'version',
    'organization'
  ],
  endpoint: [
    'id',
    'methods',
    'allowMissingApiKey',
    'apiKeyValueLocationKey',
    'apiKeyValueLocations',
    'apiMethodDetectionKey',
    'apiMethodDetectionLocations',
    'cache',
    'errors',
    'connectionTimeoutForSystemDomainRequest',
    'connectionTimeoutForSystemDomainResponse',
    'cookiesDuringHttpRedirectsEnabled',
    'cors',
    'created',
    'customRequestAuthenticationAdapter',
    'dropApiKeyFromIncomingCall',
    'forceGzipOfBackendCall',
    'gzipPassthroughSupportEnabled',
    'headersToExcludeFromIncomingCall',
    'highSecurity',
    'hostPassthroughIncludedInBackendCallHeader',
    'inboundSslRequired',
    'jsonpCallbackParameter',
    'jsonpCallbackParameterValue',
    'scheduledMaintenanceEvent',
    'forwardedHeaders',
    'returnedHeaders',
    'name',
    'numberOfHttpRedirectsToFollow',
    'outboundRequestTargetPath',
    'outboundRequestTargetQueryParameters',
    'outboundTransportProtocol',
    'processor',
    'publicDomains',
    'requestAuthenticationType',
    'requestPathAlias',
    'requestProtocol',
    'oauthGrantTypes',
    'stringsToTrimFromApiKey',
    'supportedHttpMethods',
    'systemDomainAuthentication',
    'systemDomains',
    'trafficManagerDomain',
    'updated',
    'useSystemDomainCredentials',
    'systemDomainCredentialKey',
    'systemDomainCredentialSecret',
    'rateLimitHeadersEnabled',
    // This fields works only when endpoint is scoped under `package -> plan -> service -> endpoint`
    // In other scopes like `service -> endpoint` is ignored
    'undefinedMethodsAllowed'
  ],
  method: [
    'id',
    'name',
    'created',
    'updated',
    'sampleJsonResponse',
    'sampleXmlResponse'
  ],
  responseFilter: [
    'id',
    'name',
    'created',
    'updated',
    'notes',
    'xmlFilterFields',
    'jsonFilterFields'
  ],
  scheduledMaintenanceEvent: [
    'id',
    'name',
    'startDateTime',
    'endDateTime',
    'endpoints'
  ],
  endpointCache: ['clientSurrogateControlEnabled', 'contentCacheKeyHeaders'],
  cors: ['allDomainsEnabled', 'maxAge'],
  systemDomainAuthentication: ['type', 'username', 'certificate', 'password'],
  serviceError: ['id', 'created', 'updated', 'name', 'action'],
  errorSet: ['id', 'name', 'type', 'jsonp', 'jsonpType', 'errorMessages'],
  errorMessage: ['id', 'code', 'status', 'detailHeader', 'responseBody'],
  cache: ['cacheTtl'],
  securityProfile: ['oauth'],
  oAuth: [
    'accessTokenTtlEnabled',
    'accessTokenTtl',
    'accessTokenType',
    'allowMultipleToken',
    'authorizationCodeTtl',
    'forwardedHeaders',
    'masheryTokenApiEnabled',
    'refreshTokenEnabled',
    'enableRefreshTokenTtl',
    'tokenBasedRateLimitsEnabled',
    'forceOauthRedirectUrl',
    'forceSslRedirectUrlEnabled',
    'grantTypes',
    'macAlgorithm',
    'qpsLimitCeiling',
    'rateLimitCeiling',
    'refreshTokenTtl',
    'secureTokensEnabled'
  ],
  role: ['id', 'created', 'updated', 'name', 'action'],
  package: [
    'id',
    'created',
    'updated',
    'name',
    'description',
    'notifyDeveloperPeriod',
    'notifyDeveloperNearQuota',
    'notifyDeveloperOverQuota',
    'notifyDeveloperOverThrottle',
    'notifyAdminPeriod',
    'notifyAdminNearQuota',
    'notifyAdminOverQuota',
    'notifyAdminOverThrottle',
    'notifyAdminEmails',
    'nearQuotaThreshold',
    'eav',
    'keyAdapter',
    'keyLength',
    'sharedSecretLength',
    'plans'
  ],
  plan: [
    'id',
    'created',
    'updated',
    'name',
    'description',
    'eav',
    'selfServiceKeyProvisioningEnabled',
    'adminKeyProvisioningEnabled',
    'notes',
    'maxNumKeysAllowed',
    'numKeysBeforeReview',
    'qpsLimitCeiling',
    'qpsLimitExempt',
    'qpsLimitKeyOverrideAllowed',
    'rateLimitCeiling',
    'rateLimitExempt',
    'rateLimitKeyOverrideAllowed',
    'rateLimitPeriod',
    'responseFilterOverrideAllowed',
    'status',
    'emailTemplateSetId',
    'services'
  ],
  packageKey: [
    'id',
    'apikey',
    'secret',
    'created',
    'updated',
    'rateLimitCeiling',
    'rateLimitExempt',
    'qpsLimitCeiling',
    'qpsLimitExempt',
    'status',
    'limits',
    'package',
    'plan'
  ]
}
