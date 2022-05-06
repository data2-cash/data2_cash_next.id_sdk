export interface BaseInfo {
  /** Persona public key (uncomressed hexstring started with `0x`) */
  readonly persona: string
  /** Platform */
  readonly platform: string
  /** Identity */
  readonly identity: string
}

export interface GetResposne {
  readonly persona: BaseInfo['persona']
  /** All proofs belong to this persona */
  readonly proofs: readonly Proof[]
}

export interface Proof {
  /** Platform */
  readonly platform: string
  /** Identity */
  readonly identity: string
  /** KV-pair of this entry */
  readonly content: unknown
}

export interface QueryPayload<Patch> extends BaseInfo {
  /** Patch to current data */
  readonly patch: Patch
}

export interface QueryPayloadResponse {
  /** UUID for this patch action */
  readonly uuid: string
  /** Creation timestamp of this request */
  readonly created_at: number
  /** String to sign to */
  readonly sign_payload: string
}

export interface SetOptions<Patch> extends BaseInfo {
  /** UUID generated by server in `POST /v1/kv/payload` */
  readonly uuid: string
  /** Creation timestamp generated by server in `POST /v1/kv/payload` */
  readonly created_at: number
  /** Signature of this request. Base64-encoded */
  readonly signature: string
  /** Patch to specified UUID */
  readonly patch: Patch
}
