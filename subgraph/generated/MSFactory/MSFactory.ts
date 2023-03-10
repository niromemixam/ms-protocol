// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ImplementationAdded extends ethereum.Event {
  get params(): ImplementationAdded__Params {
    return new ImplementationAdded__Params(this);
  }
}

export class ImplementationAdded__Params {
  _event: ImplementationAdded;

  constructor(event: ImplementationAdded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractType(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get version(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ImplementationApproved extends ethereum.Event {
  get params(): ImplementationApproved__Params {
    return new ImplementationApproved__Params(this);
  }
}

export class ImplementationApproved__Params {
  _event: ImplementationApproved;

  constructor(event: ImplementationApproved) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isApproved(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ProxyDeployed extends ethereum.Event {
  get params(): ProxyDeployed__Params {
    return new ProxyDeployed__Params(this);
  }
}

export class ProxyDeployed__Params {
  _event: ProxyDeployed;

  constructor(event: ProxyDeployed) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get deployer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MSFactory extends ethereum.SmartContract {
  static bind(address: Address): MSFactory {
    return new MSFactory("MSFactory", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  FACTORY_ROLE(): Bytes {
    let result = super.call("FACTORY_ROLE", "FACTORY_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_FACTORY_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("FACTORY_ROLE", "FACTORY_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  approval(param0: Address): boolean {
    let result = super.call("approval", "approval(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_approval(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("approval", "approval(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  currentVersion(param0: Bytes): BigInt {
    let result = super.call(
      "currentVersion",
      "currentVersion(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_currentVersion(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentVersion",
      "currentVersion(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deployProxy(_type: Bytes, _data: Bytes): Address {
    let result = super.call(
      "deployProxy",
      "deployProxy(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(_type), ethereum.Value.fromBytes(_data)]
    );

    return result[0].toAddress();
  }

  try_deployProxy(_type: Bytes, _data: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployProxy",
      "deployProxy(bytes32,bytes):(address)",
      [ethereum.Value.fromFixedBytes(_type), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployProxyByImplementation(
    _implementation: Address,
    _data: Bytes,
    _salt: Bytes
  ): Address {
    let result = super.call(
      "deployProxyByImplementation",
      "deployProxyByImplementation(address,bytes,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_implementation),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_salt)
      ]
    );

    return result[0].toAddress();
  }

  try_deployProxyByImplementation(
    _implementation: Address,
    _data: Bytes,
    _salt: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployProxyByImplementation",
      "deployProxyByImplementation(address,bytes,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_implementation),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployProxyDeterministic(_type: Bytes, _data: Bytes, _salt: Bytes): Address {
    let result = super.call(
      "deployProxyDeterministic",
      "deployProxyDeterministic(bytes32,bytes,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(_type),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_salt)
      ]
    );

    return result[0].toAddress();
  }

  try_deployProxyDeterministic(
    _type: Bytes,
    _data: Bytes,
    _salt: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployProxyDeterministic",
      "deployProxyDeterministic(bytes32,bytes,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(_type),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployer(param0: Address): Address {
    let result = super.call("deployer", "deployer(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_deployer(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("deployer", "deployer(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getImplementation(_type: Bytes, _version: BigInt): Address {
    let result = super.call(
      "getImplementation",
      "getImplementation(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(_type),
        ethereum.Value.fromUnsignedBigInt(_version)
      ]
    );

    return result[0].toAddress();
  }

  try_getImplementation(
    _type: Bytes,
    _version: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getImplementation",
      "getImplementation(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(_type),
        ethereum.Value.fromUnsignedBigInt(_version)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLatestImplementation(_type: Bytes): Address {
    let result = super.call(
      "getLatestImplementation",
      "getLatestImplementation(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_type)]
    );

    return result[0].toAddress();
  }

  try_getLatestImplementation(_type: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLatestImplementation",
      "getLatestImplementation(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_type)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  implementation(param0: Bytes, param1: BigInt): Address {
    let result = super.call(
      "implementation",
      "implementation(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_implementation(
    param0: Bytes,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  multicall(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);

    return result[0].toBytesArray();
  }

  try_multicall(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  registry(): Address {
    let result = super.call("registry", "registry():(address)", []);

    return result[0].toAddress();
  }

  try_registry(): ethereum.CallResult<Address> {
    let result = super.tryCall("registry", "registry():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _registry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddImplementationCall extends ethereum.Call {
  get inputs(): AddImplementationCall__Inputs {
    return new AddImplementationCall__Inputs(this);
  }

  get outputs(): AddImplementationCall__Outputs {
    return new AddImplementationCall__Outputs(this);
  }
}

export class AddImplementationCall__Inputs {
  _call: AddImplementationCall;

  constructor(call: AddImplementationCall) {
    this._call = call;
  }

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddImplementationCall__Outputs {
  _call: AddImplementationCall;

  constructor(call: AddImplementationCall) {
    this._call = call;
  }
}

export class ApproveImplementationCall extends ethereum.Call {
  get inputs(): ApproveImplementationCall__Inputs {
    return new ApproveImplementationCall__Inputs(this);
  }

  get outputs(): ApproveImplementationCall__Outputs {
    return new ApproveImplementationCall__Outputs(this);
  }
}

export class ApproveImplementationCall__Inputs {
  _call: ApproveImplementationCall;

  constructor(call: ApproveImplementationCall) {
    this._call = call;
  }

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _toApprove(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ApproveImplementationCall__Outputs {
  _call: ApproveImplementationCall;

  constructor(call: ApproveImplementationCall) {
    this._call = call;
  }
}

export class DeployProxyCall extends ethereum.Call {
  get inputs(): DeployProxyCall__Inputs {
    return new DeployProxyCall__Inputs(this);
  }

  get outputs(): DeployProxyCall__Outputs {
    return new DeployProxyCall__Outputs(this);
  }
}

export class DeployProxyCall__Inputs {
  _call: DeployProxyCall;

  constructor(call: DeployProxyCall) {
    this._call = call;
  }

  get _type(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class DeployProxyCall__Outputs {
  _call: DeployProxyCall;

  constructor(call: DeployProxyCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployProxyByImplementationCall extends ethereum.Call {
  get inputs(): DeployProxyByImplementationCall__Inputs {
    return new DeployProxyByImplementationCall__Inputs(this);
  }

  get outputs(): DeployProxyByImplementationCall__Outputs {
    return new DeployProxyByImplementationCall__Outputs(this);
  }
}

export class DeployProxyByImplementationCall__Inputs {
  _call: DeployProxyByImplementationCall;

  constructor(call: DeployProxyByImplementationCall) {
    this._call = call;
  }

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _salt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class DeployProxyByImplementationCall__Outputs {
  _call: DeployProxyByImplementationCall;

  constructor(call: DeployProxyByImplementationCall) {
    this._call = call;
  }

  get deployedProxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployProxyDeterministicCall extends ethereum.Call {
  get inputs(): DeployProxyDeterministicCall__Inputs {
    return new DeployProxyDeterministicCall__Inputs(this);
  }

  get outputs(): DeployProxyDeterministicCall__Outputs {
    return new DeployProxyDeterministicCall__Outputs(this);
  }
}

export class DeployProxyDeterministicCall__Inputs {
  _call: DeployProxyDeterministicCall;

  constructor(call: DeployProxyDeterministicCall) {
    this._call = call;
  }

  get _type(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _salt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class DeployProxyDeterministicCall__Outputs {
  _call: DeployProxyDeterministicCall;

  constructor(call: DeployProxyDeterministicCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}
