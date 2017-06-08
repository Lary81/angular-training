import { TestBed, inject } from '@angular/core/testing';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, HttpModule, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function mockHttp(service) {
	TestBed.configureTestingModule({
		providers: [
			service,
			MockBackend,
			BaseRequestOptions,
			{
				provide: Http,
				useFactory: (backend, options) => new Http(backend, options),
				deps: [MockBackend, BaseRequestOptions]
			}
		],
		imports: [
			HttpModule
		]
	});
}

export function prepareResponse(mockBackend: MockBackend, response: any) {
	mockBackend.connections.subscribe(connection => {
		connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(response) })));
	})
}