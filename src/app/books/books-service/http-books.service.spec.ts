import { Book } from '../book';
import { TestBed, inject } from '@angular/core/testing';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, HttpModule, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpBooksService } from './http-books.service';
import { mockHttp, prepareResponse } from '../../test-utils'

describe('Http books service', () => {
	let book = new Book({ id: 1 })

	beforeEach(() => {
		mockHttp(HttpBooksService)
	});

	it('should retrun book with id', async(inject([HttpBooksService, MockBackend], (service, mockBackend) => {
		prepareResponse(mockBackend, book)
		service.getById(book.id).subscribe(response => expect(response).toEqual(book));
	})));

});
